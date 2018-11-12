<?php declare(strict_types=1);

namespace App\Controller;

use Doctrine\ORM\EntityRepository;
use FOS\RestBundle\Routing\ClassResourceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class ChronicleController extends Controller implements ClassResourceInterface
{
    /**
     * @var EntityRepository
     */
    private $chronicleRepository;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @param EntityRepository $chronicleRepository
     */
    public function __construct(EntityRepository $chronicleRepository, SerializerInterface $serializer)
    {
        $this->chronicleRepository = $chronicleRepository;
        $this->serializer          = $serializer;
    }

    /**
     * @return Response
     */
    public function cgetAction(): Response
    {
        return new Response($this->serializer->serialize($this->chronicleRepository->findAll(), JsonEncoder::FORMAT));
    }
}
