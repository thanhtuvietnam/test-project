'use client';
import { InputField } from '@/components/atoms';
import { cn } from '@/lib/utils';
import Form from 'next/form';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [animating, setAnimating] = useState<boolean>(false);

  const placeholders = [
    "What's the first rule of Fight Club?",
    'Who is Tyler Durden?',
    'Where is Andrew Laeddis Hiding?',
    'Write a Javascript method to reverse a string',
    'How to assemble your own PC?',
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Form action="/login">
      <InputField
        id={''}
        name={''}
        // currentPlaceholder={currentPlaceholder} setCurrentPlaceholder={setCurrentPlaceholder}
        placeholders={placeholders}
        onSubmit={onSubmit}
        onChange={handleChange}
      />
      {/* <div>search button</div */}
    </Form>
  );
};

export default SearchBar;
