<?php

namespace App\Http\Controllers;

use App\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Appointment::all();
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
       
        return Appointment::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone_no'=>$request->phone_no,
            'type'=>$request->type,
            'organization'=>$request->organization,
            'reason_for_visit'=>$request->reason_for_visit,
            'whom_to_see'=>$request->whom_to_see,
            'department'=>$request->department,
            'time'=>$request->time,
             'date'=>$request->date,
             'status'=>'Active',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }
    public function checkTime(Request $request)
    {
       
        $schedules = Appointment::where('time',$request->time)->first();
        if (is_null($schedules)) {
            return response()->json([
                'status'=>'valid'
            ]);
        }else{
            return response()->json([
                'status'=>'invalid'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
