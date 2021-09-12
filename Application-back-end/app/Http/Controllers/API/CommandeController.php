<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commandes;
use Illuminate\Http\Request;
use Log;
class CommandeController extends Controller
{
    //
    public function create(Request $request){
        $data['ID_REPAS'] = $request['id_repas'];
        $data['ID_CLIENTS'] = 1;
        $data['QTE'] = $request['qte'];
        $data['ETAT'] = 0;
        $data['EMBALLAGE'] = $request['Emballage'];
        $data['SERVIETTE'] = $request['Serviette'];
        $data['COUVERT'] = $request['Couvert'];

        Commandes::create($data);
        return response()->json([
            'message' => "Ajout reussi",
            'succes' => true
        ], 200);
    }
    public function readAll(){
        $data = Commandes::join('repas','repas.id','=','commandes.id_repas')->get();
        return response()->json($data, 200);
    }
}
