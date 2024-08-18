"use client";

import React, { useState } from 'react';

interface ICouple {
  groom: {
    name: {
      first: string;
      last: string;
    };
  };
  bride: {
    name: {
      first: string;
      last: string;
    };
  };
}

interface IWeddingData {
  initiator: string; // Change to string to store email
  couples: ICouple;
}

interface InitiateWebsiteProps {
  initiator: string;
}

const InitiateWebsite: React.FC<InitiateWebsiteProps> = ({ initiator: initiatorEmail }) => {
    
    const [weddingData, setWeddingData] = useState<IWeddingData>({
    initiator: initiatorEmail,
    couples: {
      groom: { name: { first: '', last: '' } },
      bride: { name: { first: '', last: '' } },
    },
  });

  const handleCoupleChange = (e: React.ChangeEvent<HTMLInputElement>, role: 'groom' | 'bride', field: 'first' | 'last') => {
    const { value } = e.target;
    setWeddingData((prevData) => ({
      ...prevData,
      couples: {
        ...prevData.couples,
        [role]: {
          ...prevData.couples[role],
          name: {
            ...prevData.couples[role].name,
            [field]: value,
          },
        },
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Wedding Data:', weddingData);
    // You can send the data to your backend here
  };

  return (
    <form className='initiate-website-form' onSubmit={handleSubmit}>
      <div>
        <h3>Couple</h3>
        <label>
          Groom
          <input
            type="text"
            placeholder='First Name'
            name="groomFirstName"
            value={weddingData.couples.groom.name.first}
            onChange={(e) => handleCoupleChange(e, 'groom', 'first')}
          />
          <input
            type="text"
            placeholder='Last Name'
            name="groomLastName"
            value={weddingData.couples.groom.name.last}
            onChange={(e) => handleCoupleChange(e, 'groom', 'last')}
          />
        </label>
        <label>
            Bride
          <input
            type="text"
            placeholder='First Name'
            name="brideFirstName"
            value={weddingData.couples.bride.name.first}
            onChange={(e) => handleCoupleChange(e, 'bride', 'first')}
          />          
          <input
            type="text"
            placeholder='Last Name'
            name="brideLastName"
            value={weddingData.couples.bride.name.last}
            onChange={(e) => handleCoupleChange(e, 'bride', 'last')}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InitiateWebsite;
