<?php

namespace App\Http\Controllers;

use App\WasscePrivateSchool;
use Illuminate\Http\Request;

class WasscePrivateSchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        WasscePrivateSchool::paginate(15);
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
        return  WasscePrivateSchool::create([
            'centre_no' => $request->sect,
            'name_of_school' => $request->name_of_school,
            'phone_no' => $request->phone_no,
            'name_of_principal'=>$request->name_of_principal,
           
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\WasscePrivateSchool  $wasscePrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function show(WasscePrivateSchool $wasscePrivateSchool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\WasscePrivateSchool  $wasscePrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function edit(WasscePrivateSchool $wasscePrivateSchool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\WasscePrivateSchool  $wasscePrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WasscePrivateSchool $wasscePrivateSchool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\WasscePrivateSchool  $wasscePrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function destroy(WasscePrivateSchool $wasscePrivateSchool)
    {
        //
    }
}
