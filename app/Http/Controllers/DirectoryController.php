<?php

namespace App\Http\Controllers;

use App\Directory;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    public function create(Request $request)
    {
//         $arr=[
           
// "Holy Rosary School of Nursing/Midwifery, Emekuku",
// "Holy Rosary School of Health Technology, Emekuku"
            
            
            
           
//       ];

      
//            foreach($arr as $ar){
//             Directory::create([
//                         'name' => $ar,
//                         'address'  => 'null',
//                         'phone_no'  => 'null',
//                         'email'  => 'null',
//                         'level'  => $request->level,
//                         'lga'  => $request->lga,
//                         'accreditation'  => $request->accreditation,
//                         'ownership'  => $request->ownership,
//                         'type'  => $request->type,
//                         'sector'  => $request->sector
//                         ]);
            
//            }
           

        return Directory::create([
                'name' => $request->name,
                'address'  => $request->address,
                'phone_no'  => $request->phone_no,
                'email'  => $request->email,
                'level'  => $request->level,
                'lga'  => $request->lga,
                'accreditation'  => $request->accreditation,
                'ownership'  => $request->ownership,
                'type'  => $request->type,
                'sector'  => $request->sector
                ]);
    }
    public function update(Request $request, $id)
    {
        $school = Directory::where('id', $id)->first();
        $school->name = $request->name;
        $school->address  = $request->address;
        $school->phone_no  = $request->phone_no;
        $school->email  = $request->email;
        $school->level  = $request->level;
        $school->lga  = $request->lga;
        $school->accreditation  = $request->accreditation;
        $school->ownership = $request->ownership;
        $school->type = $request->type;
        $school->sector  = $request->sector;
        $school->save();
        return response()->json([
            'status'=>'Updated'
        ]);
    }
    public function getSchools()
    {
        return Directory::paginate(15);
    }
    public function getSchool($id)
    {
        return Directory::where('id', $id)->first();
    }
    public function singleDelete($id)
    {
        $find = Directory::find($id);
        $find->delete();
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
    public function massDelete(Request $request)
    {
        foreach ($request as $id) {
            $find = Directory::find($id);
            $find->delete();
        }
     
        return response()->json([
            'status'=>'Deleted'
        ]);
    }
}
