
import React from 'react';

export const Header = () => (
    <div className='title container'>
        <div style={{ height: '100%', fontSize: 18, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{lineHeight: '48px'}}>Reacticons</div>
            <div style={{lineHeight: '48px'}}>                
                <span style={{paddingRight: 4}}>
                    <a className="github-button" href="https://github.com/wmira/reacticons/fork" data-icon="octicon-repo-forked" aria-label="Fork wmira/reacticons on GitHub">Fork</a>
                </span>
                <a className="github-button" href="https://github.com/wmira/reacticons" data-icon="octicon-star" data-count-href="/wmira/reacticons/stargazers" data-count-api="/repos/wmira/reacticons#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star wmira/reacticons on GitHub">Star</a>
            </div>
        </div>
    </div>
);

export default Header;