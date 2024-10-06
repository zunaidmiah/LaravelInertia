<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard(){
        return Inertia::render('Admin/Pages/Dashboard');
    }

    public function zone(){
        return Inertia::render('Admin/Pages/Zone');
    }
}
