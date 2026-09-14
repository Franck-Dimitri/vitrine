<?php

namespace Tests\Feature;

use Tests\TestCase;

class HomeTest extends TestCase
{
    /**
     * Test that the homepage loads successfully with Inertia and all Module 1 props.
     */
    public function test_homepage_returns_successful_response_with_ecosystems(): void
    {
        $response = $this->get(route('home'));

        $response->assertStatus(200);

        $response->assertInertia(fn ($page) => $page
            ->component('Welcome')
            ->has('ecosystems', 8)
            ->has('stats', 4)
            ->has('services', 6)
            ->has('partners')
            ->has('company')
            ->where('company.name', 'Vitrine Consulting SARL')
            ->where('ecosystems.0.name', 'CaBougeOu')
            ->where('ecosystems.1.name', 'Sabes Numerik')
        );
    }
}
