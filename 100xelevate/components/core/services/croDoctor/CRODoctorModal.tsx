'use client'

import React, { useEffect, useState } from 'react'

const labelClass = 'block text-[14px] font-[500] text-black mb-2 leading-[20px]'
const inputClass =
    'w-full border border-transparent border-b border-b-black bg-transparent py-[8px] px-[16px] text-[14px] text-[#707070] placeholder-gray-400 focus:outline-none focus:border focus:border-[2px] focus:border-gray-100 focus:border-b-gray-500 focus:bg-white transition-all duration-150'
const inputClassError = 'border-b-red-600 focus:border-b-red-600 focus:border-gray-100'

function cx(hasError: boolean) {
    return hasError ? `${inputClass} ${inputClassError}` : inputClass
}

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.25 10C0.25 4.615 4.615 0.25 10 0.25C15.385 0.25 19.75 4.615 19.75 10C19.75 15.385 15.385 19.75 10 19.75C4.615 19.75 0.25 15.385 0.25 10ZM13.61 8.186C13.67 8.10605 13.7134 8.01492 13.7377 7.91795C13.762 7.82098 13.7666 7.72014 13.7514 7.62135C13.7361 7.52257 13.7012 7.42782 13.6489 7.3427C13.5965 7.25757 13.5276 7.18378 13.4463 7.12565C13.3649 7.06753 13.2728 7.02624 13.1753 7.00423C13.0778 6.98221 12.9769 6.97991 12.8785 6.99746C12.7801 7.01501 12.6862 7.05205 12.6023 7.10641C12.5184 7.16077 12.4462 7.23135 12.39 7.314L9.154 11.844L7.53 10.22C7.38782 10.0875 7.19978 10.0154 7.00548 10.0188C6.81118 10.0223 6.62579 10.101 6.48838 10.2384C6.35097 10.3758 6.27225 10.5612 6.26882 10.7555C6.2654 10.9498 6.33752 11.1378 6.47 11.28L8.72 13.53C8.79699 13.6069 8.8898 13.6662 8.99199 13.7036C9.09418 13.7411 9.20329 13.7559 9.31176 13.7469C9.42023 13.738 9.52546 13.7055 9.62013 13.6519C9.7148 13.5982 9.79665 13.5245 9.86 13.436L13.61 8.186Z" fill="black" />
    </svg>
)

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none" className='w-[15px] h-auto'>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
            fill="white"
        />
    </svg>
)

interface CRODoctorModalProps {
    websiteUrl: string
    onClose: () => void
}

interface FormState {
    firstName: string
    lastName: string
    email: string
    phone: string
}

export const CRODoctorModal = ({ websiteUrl, onClose }: CRODoctorModalProps) => {
    const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', phone: '' })
    const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Lock body scroll while modal is open
    useEffect(() => {
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = prev }
    }, [])

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [onClose])

    const validate = (data: FormState): Partial<FormState> => {
        const errs: Partial<FormState> = {}
        if (!data.firstName.trim()) errs.firstName = 'First name is required.'
        if (!data.lastName.trim()) errs.lastName = 'Last name is required.'
        if (!data.email.trim()) {
            errs.email = 'Email address is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errs.email = 'Please enter a valid email address.'
        }
        if (!data.phone.trim()) {
            errs.phone = 'Phone number is required.'
        } else if (!/^[0-9()#&+*\-=.]+$/.test(data.phone.trim())) {
            errs.phone = 'Only numbers and phone characters (#, -, *, etc) are accepted.'
        }
        return errs
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        setFieldErrors(prev => ({ ...prev, [name]: undefined }))
        setError(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const errs = validate(form)
        if (Object.keys(errs).length > 0) {
            setFieldErrors(errs)
            return
        }
        setSubmitting(true)
        setError(null)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${form.firstName} ${form.lastName}`.trim(),
                    email: form.email,
                    phone: form.phone,
                    company: websiteUrl,
                    service: 'CRO Doctor',
                    message: `Website URL: ${websiteUrl}`,
                }),
            })
            if (!res.ok) throw new Error('Submission failed')
            setSuccess(true)
            setForm({ firstName: '', lastName: '', email: '', phone: '' })
            setFieldErrors({})
        } catch {
            setError('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Get Your Full Report Free"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 "
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div className="relative bg-white w-full max-w-[640px] max-h-[100vh] overflow-y-auto border border-[#0000001A] shadow-2xl animated">

                <div className="flex flex-col gap-5">

                    {/* ── First column ── */}
                    <div className=" p-5 flex flex-col gap-[10px] border-b border-[#0000001A]">
                        <h2 className="xl:text-[32px] xl:leading-[40px] wmd:text-[36px] wmd:leading-[46px] md:text-[25px] md:leading-[30px] leading-[27px] text-[28px]  font-semibold text-black">
                            Get Your Full Report Free
                        </h2>
                        <div className='flex justify-between gap-[10px] items-center flex-wrap'>
                            <p className="md:text-[14px] md:leading-[20px] text-[12px] leading-[18px] md:max-w-[75%] max-w-[62%] text-[#707070]">
                                Enter your details below to get instant access to your complete audit report with detailed recommendations.
                            </p>
                            <div className="border border-[#0000001A] rounded-full px-3 py-[6px] flex items-center bg-[#F7F7F7]">
                                <span className="text-[12px] leading-[20px] uppercase font-normal text-black">100% Free</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Second column ── */}
                    <div className=" pt-0 p-5 flex flex-col gap-5">
                        {success ? (
                            <div className="flex flex-col gap-3">
                                <p className="text-green-600 font-medium text-[15px]">
                                    Thank you! Your full report is on its way to your inbox.
                                </p>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="self-start bg-black text-white text-[14px] font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form
                                name="CRO Doctor"
                                aria-label="CRO Doctor"
                                onSubmit={handleSubmit}
                                noValidate
                                className="flex flex-col gap-6 lg:mt-0 md:mt-5 mt-0"
                            >
                                {/* Hidden website URL */}
                                <input type="hidden" name="form_fields[website_URL]" value={websiteUrl} />

                                <div className="flex flex-wrap gap-6">
                                    {/* First Name */}
                                    <div className=" w-full md:max-w-[calc(50%-12px)]">
                                        <label htmlFor="cro-firstName" className={labelClass}>First Name</label>
                                        <input
                                            id="cro-firstName"
                                            type="text"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="Jane"
                                            className={cx(!!fieldErrors.firstName)}
                                            aria-invalid={!!fieldErrors.firstName}
                                            aria-describedby={fieldErrors.firstName ? 'cro-firstName-error' : undefined}
                                        />
                                        {fieldErrors.firstName && (
                                            <p id="cro-firstName-error" role="alert" className="mt-1 text-[12px] text-red-600">{fieldErrors.firstName}</p>
                                        )}
                                    </div>

                                    {/* Last Name */}
                                    <div className=" w-full md:max-w-[calc(50%-12px)]">
                                        <label htmlFor="cro-lastName" className={labelClass}>Last Name</label>
                                        <input
                                            id="cro-lastName"
                                            type="text"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Smith"
                                            className={cx(!!fieldErrors.lastName)}
                                            aria-invalid={!!fieldErrors.lastName}
                                            aria-describedby={fieldErrors.lastName ? 'cro-lastName-error' : undefined}
                                        />
                                        {fieldErrors.lastName && (
                                            <p id="cro-lastName-error" role="alert" className="mt-1 text-[12px] text-red-600">{fieldErrors.lastName}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="w-full">
                                        <label htmlFor="cro-email" className={labelClass}>Your email address</label>
                                        <input
                                            id="cro-email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="jane.smith@email.com"
                                            className={cx(!!fieldErrors.email)}
                                            aria-invalid={!!fieldErrors.email}
                                            aria-describedby={fieldErrors.email ? 'cro-email-error' : undefined}
                                        />
                                        {fieldErrors.email && (
                                            <p id="cro-email-error" role="alert" className="mt-1 text-[12px] text-red-600">{fieldErrors.email}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className="w-full">
                                        <label htmlFor="cro-phone" className={labelClass}>Phone</label>
                                        <input
                                            id="cro-phone"
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            pattern="[0-9()#&+*\-=.]+"
                                            title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                            className={cx(!!fieldErrors.phone)}
                                            aria-invalid={!!fieldErrors.phone}
                                            aria-describedby={fieldErrors.phone ? 'cro-phone-error' : undefined}
                                        />
                                        {fieldErrors.phone && (
                                            <p id="cro-phone-error" role="alert" className="mt-1 text-[12px] text-red-600">{fieldErrors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-[13px]">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="bg-black text-white text-[15px] px-[20px] border-2 border-black py-[12px] h-[39px] hover:scale-[1.02] relative flex items-center justify-center gap-[10px] font-medium tracking-[0.01em] rounded-full overflow-hidden transition-all duration-200"
                                >
                                    <span>{submitting ? 'Submitting…' : 'Get instant access free'}</span>
                                    <ArrowIcon />
                                </button>
                            </form>
                        )}

                        {/* Footer trust signals */}
                        <div className="flex flex-col gap-5">
                            <p className="text-[12px] md:leading-[20px] leading-[18px] text-[#707070] text-center">Explore all 7 failed tests and start improving your CRO now</p>
                            
                            <ul className="flex flex-wrap gap-x-[10px] gap-y-[10px] justify-center">
                                {['No credit card required', 'Instant delivery', '100% free'].map((item) => (
                                    <li key={item} className="flex items-center gap-1.5">
                                        <CheckCircleIcon />
                                        <span className="md:text-[12px] md:leading-[16px] text-[14px] leading-[22px] text-[#707070]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[12px] text-[#707070] leading-[18px] text-center">
                                We will use your contact details to send you full report &amp; keep you updated on any future CRO products.
                                we will never spam you or sell your data. By submitting this form, you agree to our{' '}
                                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer text-black transition-colors">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
