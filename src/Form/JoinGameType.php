<?php
namespace App\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

/**
 * Form used for joining party
 */
class JoinGameType extends AbstractType
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
        ->add('yes', SubmitType::class, [
            'label' => 'Join',
            'attr' => [
                'value' => 1,
                'class' => 'btn btn-dark btn-lrg'
            ],
        ])
        ->add('no', SubmitType::class, [
            'label' => 'No thanks',
            'attr' => [
                'value' => 1,
                'class' => 'btn btn-dark btn-lrg'
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

        ]);
    }

    
}