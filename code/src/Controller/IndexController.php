<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class IndexController extends AbstractController
{
    public function test()
    {
        return $this->render('index/test.html.twig', [
            'message' => 'This is test page',
        ]);
    }
}
