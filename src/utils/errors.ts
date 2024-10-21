
export class APIError extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.name = 'APIError';
    }
  }
  
  export const handleError = (error: any) => {
    if (error instanceof APIError) {
      console.error(`Error: ${error.message} (status: ${error.statusCode})`);
    } else {
      console.error('Unexpected error:', error);
    }
  };
  