export interface WaitlistFormData {
  email: string;
  accountType: string;
  region: string;
}

export const addToWaitlist = async (formData: WaitlistFormData) => {
  try {
    const response = await fetch('https://formspree.io/f/xabc123def', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 