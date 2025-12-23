<script lang="ts">
  import { useTranslation } from "../i18n/helpers";
  export let language

  const t = useTranslation(language)
</script>

<form class="flex flex-col center m-3 max-w-100 md:max-w-lg mx-auto bg-transparent p-8 rounded-xl shadow-md space-y-6 border border-blue-300 focus-within:bg-black focus-within:shadow-lg hover:border-blue-500 focus-within:shadow-blue-300 duration-500">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-400">{t('contact.nameLabel')}</label>
    <input type="text" id="name" class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="Panagiotis Stachoulis">
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-400">{t('contact.emailLabel')}</label>
    <input type="email" id="email" class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="panos@example.com">
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-400">{t('contact.messageLabel')}</label>
    <textarea id="message" rows="4" class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder={`${t('contact.messagePlaceholder')}`}></textarea>
  </div>

  <button type="submit" class="duration-400 flex transform cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-600 px-5 py-4 md:px-8 md:py-5 font-medium text-white transition-all hover:border-blue-300 hover:shadow-blue-400 hover:shadow-md hover:rounded-4xl focus:ring-opacity-80 active:scale-95">
    {t('contact.sendButton')}
  </button>
</form>