<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commandes extends Model
{
    use HasFactory;

    protected $table = 'commandes';
    protected $fillable = ["ID_REPAS","ID_CLIENTS","QTE","ETAT","EMBALLAGE","SERVIETTE","COUVERT"];
}
