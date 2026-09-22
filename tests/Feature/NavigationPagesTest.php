<?php

namespace Tests\Feature;

use Tests\TestCase;

class NavigationPagesTest extends TestCase
{
    /**
     * Test that the /about page loads with Inertia props.
     */
    public function test_about_page_returns_successful_response(): void
    {
        $response = $this->get(route('about'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('About')
            ->has('pillars', 4)
            ->has('milestones', 4)
            ->has('company')
        );
    }

    /**
     * Test that the /work page loads with Inertia props.
     */
    public function test_work_page_returns_successful_response(): void
    {
        $response = $this->get(route('work'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Work')
            ->has('ecosystems', 8)
            ->has('categories', 9)
            ->has('company')
        );
    }

    /**
     * Test that the /careers page loads with Inertia props.
     */
    public function test_careers_page_returns_successful_response(): void
    {
        $response = $this->get(route('careers'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Careers')
            ->has('positions', 6)
            ->has('benefits', 4)
            ->has('company')
        );
    }

    /**
     * Test that the /services page loads with Inertia props.
     */
    public function test_services_page_returns_successful_response(): void
    {
        $response = $this->get(route('services'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Services')
            ->has('disciplines', 5)
            ->has('partners', 10)
            ->has('testimonials', 2)
            ->has('company')
        );
    }
}
