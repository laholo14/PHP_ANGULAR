<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Ingredients;
use Illuminate\Http\Request;
use Log;

class IngredientController extends Controller
{
    public function readAll()
    {
        // $data = Ingredients::get();
        // return response()->json($data, 200);
        $data = Ingredients::join('repas','repas.id','=','ingredients.id_repas')->get();
        return response()->json($data, 200);
    }

    public function readById($id)
    {
        return response()->json(Ingredients::findOrFail($id));
    }

    public function create(Request $request)
    {
        $data['ID_REPAS'] = $request['id_repas'];
        $data['NOM_INGREDIENTS'] = $request['nom_ingredient'];
        $data['PRIX_INGREDIENTS'] = $request['prix_ing'];
        $data['QTE_ILAINA_INGREDIENTS'] = $request['qte_ilaina_ing'];
        $data['STOCK'] = $request['stock'];

        Ingredients::create($data);

        return response()->json([
            'message' => "Ajout reussi",
            'succes' => true
        ], 200);
    }
}
