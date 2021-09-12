<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredients extends Model
{
    use HasFactory;

    protected $table = 'ingredients';
    protected $fillable = ["ID_REPAS","NOM_INGREDIENTS","PRIX_INGREDIENTS","QTE_ILAINA_INGREDIENTS","STOCK"];
}
