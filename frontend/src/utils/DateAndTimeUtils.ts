export const time = (currentDate: Date) =>
  currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

export const fullDate = (currentDate: Date) =>
  currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export const weekday = (currentDate: Date) =>
  currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  });
