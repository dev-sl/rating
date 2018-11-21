<?php declare(strict_types=1);

namespace App\Controller;

use Doctrine\ORM\EntityRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;

/**
 * Class ChronicleController
 * @package App\Controller
 */
class ChronicleController extends FOSRestController
{
    /**
     * @var EntityRepository
     */
    private $chronicleRepository;

    /**
     * ChronicleController constructor.
     * @param EntityRepository $chronicleRepository
     */
    public function __construct(EntityRepository $chronicleRepository)
    {
        $this->chronicleRepository = $chronicleRepository;
    }

    /**
     * @return View
     */
    public function getChroniclesAction(): View
    {
        return $this->view($this->chronicleRepository->findAll());
    }
}
