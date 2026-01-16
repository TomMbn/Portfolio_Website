/**
 * Analytics utility for tracking events with Google Tag Manager
 */

/**
 * Push a custom event to the dataLayer
 * @param {string} event - Event name
 * @param {object} data - Additional event data
 */
export const trackEvent = (event, data = {}) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event,
            ...data,
        });
    }
};

/**
 * Track page views
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
    trackEvent('pageview', {
        page_path: path,
        page_title: title,
    });
};

/**
 * Track clicks on external links
 * @param {string} url - External URL
 * @param {string} label - Link label
 */
export const trackExternalLink = (url, label) => {
    trackEvent('external_link_click', {
        link_url: url,
        link_label: label,
    });
};

/**
 * Track CV downloads
 * @param {string} language - CV language (en/fr)
 */
export const trackCVDownload = (language) => {
    trackEvent('cv_download', {
        cv_language: language,
    });
};

/**
 * Track contact form submissions
 * @param {string} method - Contact method (email, form, etc.)
 */
export const trackContactSubmission = (method) => {
    trackEvent('contact_submission', {
        contact_method: method,
    });
};

/**
 * Track project clicks
 * @param {string} projectName - Name of the project
 */
export const trackProjectClick = (projectName) => {
    trackEvent('project_click', {
        project_name: projectName,
    });
};

/**
 * Track language changes
 * @param {string} language - Selected language
 */
export const trackLanguageChange = (language) => {
    trackEvent('language_change', {
        selected_language: language,
    });
};
