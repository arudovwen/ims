<?php

namespace App\Http\Controllers;

use App\Lga;
use Illuminate\Http\Request;

class LgaController extends Controller
{
    public function show()
    {
        return Lga::all();
    }
    public function create(Request $request)
    {
       
        return Lga::create([
            'name'=>$request->lga
       ]);
    }
    public function delete($id)
    {
        Lga::find($id)->delete();
        return \response()->json([
            'status'=>'deleted'
        ]);
    }
    public function edit($id)
    {
        return Lga::where('id', $id)->first();
    }
    public function update(Request $request, $id)
    {
        $lga =   Lga::where('id', $id)->first();
        $lga->name = $request->name;
        $lga->save();
        return \response()->json([
        'status'=>'updated'
    ]);
    }
}
