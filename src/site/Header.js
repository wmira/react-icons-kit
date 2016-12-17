
import React from 'react';

export const Header = () => (
    <div className='title container'>
        <div style={{ height: '100%', fontSize: 18, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{lineHeight: '48px'}}>React Icons Kit</div>
            <div style={{lineHeight: '48px'}}>                
                <span style={{paddingRight: 4}}>
                    <a className="github-button" href="https://github.com/wmira/react-icons-kit/fork" data-icon="octicon-repo-forked" aria-label="Fork wmira/react-icons-kit on GitHub">Fork</a>
                </span>
                <a className="github-button" href="https://github.com/wmira/react-icons-kit" data-icon="octicon-star" data-count-href="/wmira/react-icons-kit/stargazers" data-count-api="/repos/wmira/reacticons#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star wmira/react-icons-kit on GitHub">Star</a>
            </div>
        </div>
    </div>
);

export default Header;