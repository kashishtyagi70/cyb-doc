import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Cybrovate Documentation"
      description="Cybrovate Security Documentation Portal"
    >
      <header
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: '#1e293b',
                borderRadius: '999px',
                marginBottom: '20px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              CYBROVATE DOCUMENTATION
            </div>

            <h1
              style={{
                fontSize: '64px',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
              }}
            >
              Secure.
              <br />
              Modern.
              <br />
              Documentation.
            </h1>

            <p
              style={{
                fontSize: '20px',
                color: '#cbd5e1',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              Centralized onboarding, cloud infrastructure,
              endpoint management, security workflows,
              and enterprise operational guides.
            </p>

            <div
       style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  }}
>
  <Link
    to="/docs/getting-started/introduction"
    style={{
      background: '#2563eb',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '16px',
    }}
  >
    Open Documentation
  </Link>
</div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div
              style={{
                background: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '24px',
                padding: '30px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ef4444',
                  }}
                />

                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                  }}
                />

                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#10b981',
                  }}
                />
              </div>

              <pre
                style={{
                  background: '#020617',
                  color: '#cbd5e1',
                  padding: '24px',
                  borderRadius: '16px',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  overflow: 'auto',
                  border: '1px solid #1e293b',
                }}
              >
{`Getting Started
 ├── Introduction
 ├── Prerequisites
 └── Quick Start

Onboarding
 ├── Cloud
 │   ├── AWS
 │   ├── Azure
 │   └── GCP
 │
 ├── Endpoint
 │   ├── Windows
 │   ├── Linux
 │   └── macOS`}
              </pre>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}