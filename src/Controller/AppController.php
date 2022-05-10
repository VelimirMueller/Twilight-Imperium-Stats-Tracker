<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        $pageVars = array(
            "title" => "Home",
            "headline" => "| Startseite |"
        );

        return $this->render('app/index.html.twig', [
            'pageVars' => $pageVars
        ]);
    }
}