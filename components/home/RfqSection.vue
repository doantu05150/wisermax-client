<template>
  <section id="rfq" class="band rfq">
    <div class="wrap split">
      <div>
        <h2>Send us your tech pack</h2>
        <p class="lede">
          Attach a tech pack, sketch or reference garment. A merchandiser replies within one working
          day with questions or a costing timeline.
        </p>
        <div class="direct">
          <p>Prefer email? <a :href="`mailto:${info.email_primary}`">{{ info.email_primary }}</a></p>
          <p>WhatsApp / phone: <a :href="`tel:${info.phone_href}`">{{ info.phone }}</a></p>
          <p class="addr">{{ info.company_name }}, {{ info.street }}, {{ info.city }}, {{ info.country }}</p>
        </div>
      </div>

      <form novalidate @submit.prevent="submit">
        <label>
          Name
          <input v-model.trim="form.name" type="text" name="name" autocomplete="name" required>
        </label>
        <label>
          Company
          <input v-model.trim="form.company" type="text" name="company" autocomplete="organization">
        </label>
        <label>
          Work email
          <input v-model.trim="form.email" type="email" name="email" autocomplete="email" required>
        </label>
        <label>
          Estimated quantity
          <input v-model.trim="form.qty" type="text" name="qty" placeholder="e.g. 3,000 pcs / 4 styles">
        </label>
        <label class="full">
          Tell us about the program
          <textarea
            v-model.trim="form.msg"
            name="msg"
            placeholder="Category, fabric, target FOB, delivery window…"
            required
          />
        </label>

        <label class="upload">
          <b>Choose files</b> to attach — PDF, AI, XLSX, images up to 25 MB
          <input type="file" name="files" multiple @change="pickFiles">
          <span v-if="fileNames.length" class="picked">{{ fileNames.join(' · ') }}</span>
        </label>

        <p v-if="error" class="err" role="alert">{{ error }}</p>

        <button class="btn" type="submit">Send tech pack</button>

        <p class="note" aria-live="polite">
          {{ sent
            ? 'Your mail client should have opened with the details filled in — attach the files there and send.'
            : 'Submitting opens your mail client with these details filled in, addressed to ' + info.email_primary + '.' }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import info from '@/data/info'

const form = reactive({ name: '', company: '', email: '', qty: '', msg: '' })
const fileNames = ref([])
const error = ref('')
const sent = ref(false)

function pickFiles(e) {
  fileNames.value = Array.from(e.target.files || []).map(f => f.name)
}

// The site is prerendered with no mail backend, so the form composes a
// prefilled message rather than posting to an endpoint that does not exist.
function submit() {
  if (!form.name || !form.email || !form.msg) {
    error.value = 'Name, work email and a short brief are required.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = 'That work email does not look right.'
    return
  }
  error.value = ''

  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company || '—'}`,
    `Work email: ${form.email}`,
    `Estimated quantity: ${form.qty || '—'}`,
    '',
    form.msg,
    '',
    fileNames.value.length
      ? `Files to attach: ${fileNames.value.join(', ')}`
      : 'No files selected.',
  ].join('\n')

  const subject = `Tech pack — ${form.company || form.name}`
  window.location.href =
    `mailto:${info.email_primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<style lang="scss" scoped>
.rfq :deep(.split) { align-items: start; }

.direct {
  margin-top: 40px;
  border-top: 1px solid var(--rule);
  padding-top: 24px;
  font-size: 15px;
  color: #3a3e44;

  p { margin: 0 0 8px; }
  p.addr { margin: 0; }
  a { border-bottom: 1px solid var(--ink); }
  a:hover { color: var(--indigo); border-bottom-color: var(--indigo); }
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

label {
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: #3a3e44;
}

label.full { grid-column: 1 / -1; }

input,
textarea {
  font: inherit;
  font-size: 15px;
  padding: 13px 14px;
  border: 1px solid var(--rule);
  background: #fff;
  border-radius: 2px;
  color: var(--ink);
}

textarea { min-height: 120px; resize: vertical; }

.upload {
  grid-column: 1 / -1;
  border: 1px dashed #b9b3a6;
  padding: 22px;
  text-align: center;
  color: #3a3e44;
  font-size: 15px;
  border-radius: 2px;
  background: #fff;
  cursor: pointer;

  b { font-weight: 600; }

  input[type="file"] {
    border: 0;
    padding: 0;
    margin: 10px auto 0;
    background: none;
    font-size: 14px;
    width: fit-content;
  }

  .picked {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    color: var(--thread);
  }
}

.err {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 14px;
  color: var(--selvedge);
}

form .btn {
  grid-column: 1 / -1;
  justify-self: start;
  margin-top: 6px;
}

.note {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 13px;
  color: var(--thread);
}

@media (max-width: 820px) {
  form { grid-template-columns: 1fr; }
  label.full,
  .upload,
  form .btn { grid-column: auto; }
}
</style>
