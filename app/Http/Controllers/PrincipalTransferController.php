<?php

namespace App\Http\Controllers;

use App\PrincipalTransfer;
use Illuminate\Http\Request;

class PrincipalTransferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()

    {
        return PrincipalTransfer::paginate(15);
    }

    public function all()
    {
        return PrincipalTransfer::all();
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
         return  PrincipalTransfer::create([
            'sgl'=> $request->sgl,
            'present_posting' => $request->present_posting,
            'zone'=>$request->zone,
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PrincipalTransfer  $principalTransfer
     * @return \Illuminate\Http\Response
     */
    public function show(PrincipalTransfer $principalTransfer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PrincipalTransfer  $principalTransfer
     * @return \Illuminate\Http\Response
     */
    public function edit(PrincipalTransfer $principalTransfer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PrincipalTransfer  $principalTransfer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrincipalTransfer $principalTransfer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PrincipalTransfer  $principalTransfer
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrincipalTransfer $principalTransfer)
    {
        //
    }
}
