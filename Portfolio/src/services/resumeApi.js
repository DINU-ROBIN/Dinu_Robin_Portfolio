const API_BASE_URL = 'https://dinu-robin-6742.onrender.com'; // Adjust to your Django server URL

export const downloadResume = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/resume/download/`, {
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
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        
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
        window.URL.revokeObjectURL(url);
        
        return { success: true, message: 'Resume downloaded successfully' };
    } catch (error) {
        console.error('Error downloading resume:', error);
        return { success: false, error: error.message };
    }
};
