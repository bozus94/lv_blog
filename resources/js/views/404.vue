<template>
  <div>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <nav class="nav nav-masthead justify-content-center">
            <router-link :to="{ name: 'home' }">Inicio</router-link>
            <router-link :to="{ name: 'blog' }">Blog</router-link>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">404</h1>
        <p class="lead">Pagina no encontrada</p>
      </main>
    </div>
  </div>
</template>