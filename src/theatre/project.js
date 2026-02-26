import { getProject } from '@theatre/core';

// Initialize the project
// We use a singleton pattern here to ensure we always get the same project instance
const project = getProject('Heartbreak Ink Animation');

// Create a main sheet for the animation
// In a real app, you might have multiple sheets for different scenes or cuts
const sheet = project.sheet('Main Scene');

export { project, sheet };
