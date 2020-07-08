<?php

namespace App\Http\Controllers;

use App\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Staff::paginate(15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function allStaffs(){
         return Staff::all();
     }
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        return Staff::create([
                                            
            'imssbn'=>$request->imssbn,
            'surname'=>$request->surname,
            'first_name'=>$request->first_name,
            'middle_name'=>$request->middle_name,
            'dob'=>$request->dob,
            'doe'=>$request->doe,
            'current_rank'=>$request->current_rank,
            'cgl'=>$request->cgl,
            'department'=>$request->department,
            'bank_name'=>$request->bank_name,
            'bank_acc'=>$request->bank_acc,
            'bvn'=>$request->bvn
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Staff::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Staff::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      
        $staff = Staff::find($id);
    
        $staff->imssbn =$request->imssbn;
        $staff->surname=$request->surname;
        $staff->first_name=$request->first_name;
        $staff->middle_name=$request->middle_name;
        $staff->dob=$request->dob;
        $staff->doe=$request->doe;
        $staff->current_rank=$request->current_rank;
        $staff->cgl=$request->cgl;
        $staff->department=$request->department;
        $staff->bank_name=$request->bank_name;
        $staff->bank_acc=$request->bank_acc;
        $staff->bvn=$request->bvn;
        $staff->save();

        return response()->json([
            'status'=>'updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $staff = Staff::find($id);
        $staff->delete();
        return response()->json([
            'status'=>'deleted'
        ]);
    }
    public function multiDelete(Request $request)
    {
        foreach ($request->staff as $staffs) {
            $staffs = Staff::find($admin);
            $staffs->delete();
        }
        
      
        return response()->json([
            'status'=>'deleted'
        ]);
    }
}
