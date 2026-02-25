import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    type: 'inquiry', // 'recruit' or 'inquiry'
    name: '',
    furigana: '',
    email: '',
    tel1: '',
    tel2: '',
    tel3: '',
    fax1: '',
    fax2: '',
    fax3: '',
    privacy: false,
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tel: `${formData.tel1}-${formData.tel2}-${formData.tel3}`,
          fax: `${formData.fax1}-${formData.fax2}-${formData.fax3}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({
            type: 'inquiry',
            name: '',
            furigana: '',
            email: '',
            tel1: '', tel2: '', tel3: '',
            fax1: '', fax2: '', fax3: '',
            privacy: false,
            content: ''
          });
        }, 3000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 font-serif">求人のご応募・お問い合わせ</h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-8"></div>

          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-green-600 mb-4">送信完了</h3>
              <p className="text-gray-600">お問い合わせありがとうございます。<br/>担当者より折り返しご連絡させていただきます。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-gray-800 font-sans">
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                株式会社Onisakiでは、メールやお電話での求人のご応募・お問い合わせを承っております。<br/>
                メールでのご応募・お問い合わせはご返信までお時間がかかる場合もございますので、お急ぎの方はお電話にて直接ご応募・お問い合わせ下さい。<br/>
                尚、ご応募・お問い合わせの際は、下記プライバシーポリシーをご確認ください。
              </p>

              {/* Subject */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-gray-200 pb-6">
                <label className="font-bold text-sm pt-1">
                  ご用件 <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="recruit" 
                      checked={formData.type === 'recruit'} 
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>求人のご応募</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="inquiry" 
                      checked={formData.type === 'inquiry'} 
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>お問い合わせ</span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-6">
                <label className="font-bold text-sm">
                  お名前 <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2">
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Furigana */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-6">
                <label className="font-bold text-sm">
                  ふりがな <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2">
                  <input 
                    type="text" 
                    name="furigana" 
                    required
                    value={formData.furigana}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-6">
                <label className="font-bold text-sm">
                  E-mail <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2">
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* TEL */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-6">
                <label className="font-bold text-sm">
                  TEL <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2 flex items-center gap-2">
                  <input 
                    type="tel" 
                    name="tel1" 
                    required
                    maxLength={4}
                    value={formData.tel1}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <span>-</span>
                  <input 
                    type="tel" 
                    name="tel2" 
                    required
                    maxLength={4}
                    value={formData.tel2}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <span>-</span>
                  <input 
                    type="tel" 
                    name="tel3" 
                    required
                    maxLength={4}
                    value={formData.tel3}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                </div>
              </div>

              {/* FAX */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-6">
                <label className="font-bold text-sm">
                  FAX
                </label>
                <div className="md:col-span-2 flex items-center gap-2">
                  <input 
                    type="tel" 
                    name="fax1" 
                    maxLength={4}
                    value={formData.fax1}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <span>-</span>
                  <input 
                    type="tel" 
                    name="fax2" 
                    maxLength={4}
                    value={formData.fax2}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <span>-</span>
                  <input 
                    type="tel" 
                    name="fax3" 
                    maxLength={4}
                    value={formData.fax3}
                    onChange={handleChange}
                    className="w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-center"
                  />
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-gray-200 pb-6">
                <label className="font-bold text-sm pt-1">
                  プライバシーポリシー <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="privacy" 
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">プライバシーポリシーを確認し、内容に同意します。</span>
                  </label>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pb-6">
                <label className="font-bold text-sm pt-1">
                  お問い合わせ内容 <span className="text-red-500 text-xs ml-1">※必須</span>
                </label>
                <div className="md:col-span-2">
                  <textarea 
                    name="content" 
                    required
                    rows={6}
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gray-800 text-white px-12 py-3 rounded hover:bg-gray-700 transition-colors disabled:opacity-50 font-bold tracking-wider"
                >
                  {isSubmitting ? '送信中...' : '送 信'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
