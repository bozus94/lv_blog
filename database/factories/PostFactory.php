<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    $title = $faker->sentence($nbWords = 4, $variableNbWords = true);
    return [
        'title' => $title,
        'slug' => str_slug($title),
        'excerpt' => $faker->text(),
        'body' => $faker->text(800)
    ];
});
