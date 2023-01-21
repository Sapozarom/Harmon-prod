<?php
namespace App\Form;

use App\Entity\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;


/**
 * Form used vote for specific date and game
 */
class EventType extends AbstractType
{

    /**
     * Form builder
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('vote', ChoiceType::class, [
            'label' => false,
            'choices'  => [
                'I want to attend' => true,
                "I'm unavailable" => false,
            ],
            'attr' => [
                'class' => 'form-select form-select-lg '
            ],
            'choice_attr' => [
                'I want to attend' => ['class' => 'bg-green', 'id' => 'status-vote' ],
                "I'm unavailable" => ['class' => 'bg-red', 'id' => 'status-vote'],

            ],
        ])
        ->add('maxLength', TextType::class, [
            'required' => false,
            'label' => false,

            'attr' => [
                'class' => 'form-control form-control-lg time-input'
            ],
        ])
        ->add('date', DateType ::class, [
            'label' => false,
            'required' => true,
        ])
        ->add('start', HiddenType::class, [
            'required' => true,
        ])
        ->add('finish', HiddenType::class, [
            'required' => true,
        ])
        ->add('Save', SubmitType::class, [
            'attr' => [
                'class' => 'btn btn-dark btn-lg'
            ],
        ]);
    }

    /**
     * Options
     *
     * @param OptionsResolver $resolver
     * @return void
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }


}