<script lang="ts">
	import { profile } from '$lib/data/resume';

	// TODO: Sign up at https://web3forms.com (free) and replace this with your access key.
	// The key is safe to embed in client-side code — it's tied to your email, not an auth credential.
	const WEB3FORMS_KEY = '8d6ee7a6-dc26-4090-985f-42a07dea5847';

	let formState = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formState = 'submitting';

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: WEB3FORMS_KEY,
					from_name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message
				})
			});
			const data = await res.json();
			if (data.success) {
				formState = 'success';
				formData = { name: '', email: '', subject: '', message: '' };
			} else {
				formState = 'error';
			}
		} catch {
			formState = 'error';
		}
	}
</script>

<section class="section-fade-in" style="padding: 2.5rem 3rem; max-width: 900px;">
	<h2 class="section-title">Contact</h2>

	<div class="contact-grid" style="display: grid; grid-template-columns: 280px 1fr; gap: 3rem;">
		<!-- Left: contact info -->
		<div>
			<h3
				style="
					font-family: var(--font-heading);
					font-size: 0.8rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.12em;
					color: var(--color-accent);
					margin-bottom: 1.5rem;
				"
			>
				Get In Touch
			</h3>

			<div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
				<div>
					<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;">Location</div>
					<div style="font-size: 14px; color: #e2e8f0;">📍 {profile.location}</div>
				</div>
				<div>
					<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;">Email</div>
					<a
						href="mailto:{profile.email}"
						style="font-size: 14px; color: var(--color-accent); text-decoration: none;"
					>
						✉️ {profile.email}
					</a>
				</div>
				<div>
					<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 8px;">Status</div>
					<div
						style="
							display: inline-flex;
							align-items: center;
							gap: 7px;
							background: rgba(34, 197, 94, 0.1);
							border: 1px solid rgba(34, 197, 94, 0.3);
							border-radius: 20px;
							padding: 5px 12px;
						"
					>
						<div
							style="
								width: 7px;
								height: 7px;
								background: #22c55e;
								border-radius: 50%;
								box-shadow: 0 0 8px #22c55e88;
								animation: pulse 2s ease-in-out infinite;
							"
						></div>
						<span style="font-size: 13px; font-weight: 500; color: #22c55e;">Available for Consulting</span>
					</div>
				</div>
			</div>

		</div>

		<!-- Right: contact form -->
		<div>
			{#if formState === 'success'}
				<div
					style="
						background: rgba(34, 197, 94, 0.08);
						border: 1px solid rgba(34, 197, 94, 0.3);
						border-radius: 12px;
						padding: 2rem;
						text-align: center;
					"
				>
					<div style="font-size: 2rem; margin-bottom: 1rem;">✅</div>
					<h4 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 0.5rem;">
						Message Sent
					</h4>
					<p style="font-size: 14px; color: var(--color-text-muted);">
						Thanks for reaching out. I'll get back to you soon.
					</p>
					<button
						onclick={() => (formState = 'idle')}
						style="
							margin-top: 1.25rem;
							font-family: var(--font-body);
							font-size: 13px;
							color: var(--color-accent);
							background: none;
							border: none;
							cursor: pointer;
							text-decoration: underline;
						"
					>
						Send another
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} style="display: flex; flex-direction: column; gap: 1rem;">
					<div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
						<div>
							<label
								for="name"
								style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;"
							>
								Name
							</label>
							<input
								id="name"
								type="text"
								required
								bind:value={formData.name}
								placeholder="Your name"
								style="
									width: 100%;
									background: var(--color-surface-600);
									border: 1px solid var(--color-border);
									border-radius: 8px;
									padding: 10px 14px;
									font-family: var(--font-body);
									font-size: 14px;
									color: #fff;
									outline: none;
									transition: border-color 0.2s ease;
								"
								onfocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
								onblur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
							/>
						</div>
						<div>
							<label
								for="email"
								style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								required
								bind:value={formData.email}
								placeholder="your@email.com"
								style="
									width: 100%;
									background: var(--color-surface-600);
									border: 1px solid var(--color-border);
									border-radius: 8px;
									padding: 10px 14px;
									font-family: var(--font-body);
									font-size: 14px;
									color: #fff;
									outline: none;
									transition: border-color 0.2s ease;
								"
								onfocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
								onblur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
							/>
						</div>
					</div>

					<div>
						<label
							for="subject"
							style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;"
						>
							Subject
						</label>
						<input
							id="subject"
							type="text"
							required
							bind:value={formData.subject}
							placeholder="What's this about?"
							style="
								width: 100%;
								background: var(--color-surface-600);
								border: 1px solid var(--color-border);
								border-radius: 8px;
								padding: 10px 14px;
								font-family: var(--font-body);
								font-size: 14px;
								color: #fff;
								outline: none;
								transition: border-color 0.2s ease;
							"
							onfocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
							onblur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
						/>
					</div>

					<div>
						<label
							for="message"
							style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px;"
						>
							Message
						</label>
						<textarea
							id="message"
							required
							rows={5}
							bind:value={formData.message}
							placeholder="Tell me about your project or opportunity..."
							style="
								width: 100%;
								background: var(--color-surface-600);
								border: 1px solid var(--color-border);
								border-radius: 8px;
								padding: 10px 14px;
								font-family: var(--font-body);
								font-size: 14px;
								color: #fff;
								outline: none;
								resize: vertical;
								min-height: 120px;
								transition: border-color 0.2s ease;
							"
							onfocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
							onblur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
						></textarea>
					</div>

					{#if formState === 'error'}
						<p style="font-size: 13px; color: #f87171;">Something went wrong. Try emailing directly at {profile.email}</p>
					{/if}

					<button
						type="submit"
						disabled={formState === 'submitting'}
						style="
							font-family: var(--font-heading);
							font-size: 14px;
							font-weight: 600;
							letter-spacing: 0.05em;
							color: #fff;
							background: {formState === 'submitting' ? 'var(--color-border)' : 'var(--color-accent)'};
							border: none;
							border-radius: 8px;
							padding: 12px 28px;
							cursor: {formState === 'submitting' ? 'not-allowed' : 'pointer'};
							align-self: flex-start;
							transition: background 0.2s ease, transform 0.1s ease;
						"
						onmouseenter={(e) => {
							if (formState !== 'submitting') {
								(e.currentTarget as HTMLElement).style.background = 'var(--color-accent-dark)';
								(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
							}
						}}
						onmouseleave={(e) => {
							if (formState !== 'submitting') {
								(e.currentTarget as HTMLElement).style.background = 'var(--color-accent)';
								(e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
							}
						}}
					>
						{formState === 'submitting' ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 4px #22c55e66;
		}
		50% {
			box-shadow: 0 0 10px #22c55ecc;
		}
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr !important;
			gap: 1.5rem !important;
		}
		.form-row {
			grid-template-columns: 1fr !important;
		}
	}
</style>
