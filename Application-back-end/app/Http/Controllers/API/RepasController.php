<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Repa;
use Illuminate\Http\Request;
use App\Models\Repas;
use Log;

class RepasController extends Controller
{
    public function readAll()
    {
        $data = Repas::get();
        return response()->json($data, 200);
    }

    public function readById($id)
    {
        return response()->json(Repas::findOrfail($id));
    }


    public function create(Request $request)
    {
        $data['NOM_REPAS'] = $request['nom_repas'];
        $data['PRIX'] = $request['prix'];

        Repas::create($data);
    

        return response()->json([
            'message' => "Ajout reussi",
            'succes' => true
        ], 200);
     
   
    }
}
