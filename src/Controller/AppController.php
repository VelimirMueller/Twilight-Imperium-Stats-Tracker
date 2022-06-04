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

    /**
     * @Route("/app", name="app_main")
     */
    public function main(): Response
    {
        $pageVars = array(
            "title" => "Main",
            "headline" => "| Overview |"
        );

        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->render('app/main.html.twig', [
                'username' => $this->getUser()->getUserIdentifier(),
                'pageVars' => $pageVars
            ]);
        }

        return $this->render('error/authError.html.twig', [
            'error' => 'not authenticated, please login !'
        ]);
    }
}