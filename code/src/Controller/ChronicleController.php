<?php declare(strict_types=1);

namespace App\Controller;

use Doctrine\ORM\EntityRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use FOS\RestBundle\View\View;

/**
 * Class ChronicleController
 * @package App\Controller
 */
class ChronicleController extends FOSRestController implements ClassResourceInterface
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
    public function cgetAction(): View
    {
        return $this->view($this->chronicleRepository->findAll());
    }
}
