<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;	
use App\User;

class ApiController extends Controller
{
    public function authenticate()
    {
    	$credentials = request()->all();
    	try {

    		$token = JWTAuth::attempt($credentials);
    		if(!$token){
    			return response()->json(['error' => 'invalid credentials','error_status' => 401 ]);
    		}

    	} catch (JWTException $e) {
    			return reponse()->json(['error' => 'something went wrong'],500);	
    	}

            $user = JWTAuth::toUser($token);

    	return response()->json([ 'token' => $token, 'user' => $user ],200);

    }

    public function register()
    {
        $name = request()->name;
        $email = request()->email;
        $password = request()->password;

        $isUnique = User::where('email',$email)->first();

        if(!$isUnique){

            $user = User::create([
                'name' => $name,
                'email' => $email,
                'password' => bcrypt($password)
            ]);

            $token = JWTAuth::fromUser($user);
            return response()->json(['token' => $token ],200);
        }
        else{
            return response()->json(['error' => 'email already taken','error_status' => 'email_taken' ]);
        }

        
    }

    public function users()
    {
        $users = User::all();
        $response = [
            'users' => $users
        ];
        return response()->json($response,200);
    }
}
