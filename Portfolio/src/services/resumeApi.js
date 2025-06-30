const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://dinu-robin-6742.onrender.com'; // Use environment variable

export const downloadResume = async () => {
    try {
        const url = API_BASE_URL.replace(/\/$/, '') + '/api/resume/download/';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the blob from response
        const blob = await response.blob();
        
        // Create download link
        const urlLink = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = urlLink;
        
        // Get filename from response headers or use default
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'Dinu_Robin_Resume.pdf';
        
        if (contentDisposition) {
            const filenameMatch = contentDisposition.match(/filename="(.+)"/);
            if (filenameMatch) {
                filename = filenameMatch[1];
            }
        }
        
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(urlLink);
        
        return { success: true, message: 'Resume downloaded successfully' };
    } catch (error) {
        console.error('Error downloading resume:', error);
        return { success: false, error: error.message };
    }
};
