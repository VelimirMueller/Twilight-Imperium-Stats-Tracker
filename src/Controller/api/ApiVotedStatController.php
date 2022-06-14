<?php

namespace App\Controller\api;

use App\Entity\VotedStat;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiVotedStatController extends AbstractController
{
  /**
   * @Route("/api/get/VotedStats", name="app_get_voted_stats", methods={"POST"})
   */
  public function getVotedStats(): JsonResponse
  {
    $votedStats = $this->getDoctrine()
      ->getRepository(VotedStat::class)
      ->findAll();

    return $this->json($votedStats);
  }
}