<?php

namespace App\Http\Controllers;

use App\Applications;
use Illuminate\Http\Request;

class ApplicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Applications::all();
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
       
        return Applications::create([
            'ref'=>$request->ref,
            'payment'=>$request->payment,
            'payment_status'=>$request->payment_status,
            'price'=>$request->price,
            'group'=>$request->group,
            'phase'=>$request->phase,
            'name'=>$request->name,
            'status'=>'pending',
            'response' => json_encode($request->response),
           
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Applications  $applications
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
      return  Applications::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Applications  $applications
     * @return \Illuminate\Http\Response
     */
    public function edit(Applications $applications)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Applications  $applications
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      
        $app = Applications::find($id);
        $app->status = $request->status;    
        $app->save();
     
        // if ($app->status == 'accepted') {
        //     Mail::to($app->email)->send(new ScheduleAppointment($app));
        // }
        return $app;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Applications  $applications
     * @return \Illuminate\Http\Response
     */
    public function destroy(Applications $applications)
    {
        //
    }
}
