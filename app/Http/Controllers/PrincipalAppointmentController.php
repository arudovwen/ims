<?php

namespace App\Http\Controllers;

use App\PrincipalAppointment;
use Illuminate\Http\Request;

class PrincipalAppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PrincipalAppointment::paginate(15);
    }
  public function all(){
      return PrincipalAppointment::all();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PrincipalAppointment  $principalAppointment
     * @return \Illuminate\Http\Response
     */
    public function show(PrincipalAppointment $principalAppointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PrincipalAppointment  $principalAppointment
     * @return \Illuminate\Http\Response
     */
    public function edit(PrincipalAppointment $principalAppointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PrincipalAppointment  $principalAppointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrincipalAppointment $principalAppointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PrincipalAppointment  $principalAppointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrincipalAppointment $principalAppointment)
    {
        //
    }
}
