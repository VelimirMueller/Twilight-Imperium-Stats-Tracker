<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
  /**
   * @Route("/login", name="app_login", methods={"POST"})
   */
  public function login(): JsonResponse
  {
    /**
     * Throws an error if any other Content-type other than application/json has been send
     */
    if (!$this->isGranted('IS_AUTHENTICATED_FULLY')) {    
      return $this->json([
        'error' => 'ivalid login request: check that the Content-Type header is "application/json"'
      ], 400);
    }

    $userData = $this->getUser();
    $userId = $userData->getId();
    $username = $userData->getUserIdentifier();

    return $this->json(['userId' => $userData ? $userId : null,
      'username' => $userData ? $username : null
    ]);
  }
}