<?php

namespace App\Http\Controllers;

use App\PrincipalPhone;
use Illuminate\Http\Request;

class PrincipalPhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PrincipalPhone::paginate(15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return  PrincipalPhone::create([
            'name'=> $request->name,
            'sect' => $request->sect,
            'present_posting' => $request->present_posting,
            'phone_no' => $request->phone_no,
            'lga'=>$request->lga,
            'remarks'=>$request->remarks,
            'zone'=>$request->zone,
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PrincipalPhone  $principalPhone
     * @return \Illuminate\Http\Response
     */
    public function show(PrincipalPhone $principalPhone)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PrincipalPhone  $principalPhone
     * @return \Illuminate\Http\Response
     */
    public function edit(PrincipalPhone $principalPhone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PrincipalPhone  $principalPhone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrincipalPhone $principalPhone)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PrincipalPhone  $principalPhone
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrincipalPhone $principalPhone)
    {
        //
    }
}
