import React, { useState } from 'react';

export interface LoginProps {
    onSubmit: (username: string, password: string) => void;
  }