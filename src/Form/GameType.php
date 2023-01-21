<?php
namespace App\Form;

use App\Entity\Game;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

/**
 * Form used to create partiess
 */
class GameType extends AbstractType
{
    /**
     * Builder
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('name', TextType::class, [
            'required' => false,
            'label' => 'Party name:',
        ])
        ->add('title', TextType::class, [
            'required' => false,
            'label' => 'Activity name:',
        ])
        ->add('description', TextareaType::class, [
            'required' => false,
            'label' => 'Descriprion:',
        ])
        ->add('minSessionLength', TextType::class, [
            'required' => false,
            'label' => 'Minimal session length (minutes):',
        ])
        ->add('Save', SubmitType::class, [
            'attr' => [
                'class' => 'btn btn-dark btn-lg'
            ],
        ]);
        ;
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
            'data_class' => Game::class,
            'csrf_protection' => false,
        ]);
    }
}