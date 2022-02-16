<script lang="ts">
  import { Link } from 'svelte-routing';

  import { ROUTES } from '@constants/routes';
</script>

<header class="p-5 bg-main">
  <div class="flex justify-between">
    <div class="flex items-center">
      <p class="font-extrabold text-2xl">Javascript</p>
      <span class="font-extrabold ml-3"> - </span>
      <p class="font-semibold ml-3 ">Курсы</p>
    </div>
    <nav>
      <ul class="flex">
        <li class="mr-5">
          <Link to={ROUTES.AUTH}>Войти</Link>
        </li>
        <li><Link to={ROUTES.REGISTRATION}>Зарегистрируйтесь</Link></li>
      </ul>
    </nav>
  </div>
</header>
