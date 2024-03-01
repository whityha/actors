import { APPEAL } from '@/constants';
import Header from '../Header';
import './style.sass'

const SectionPreview = () => {
    return <section className='preview'>
        <Header dark />
        <div className='wrapper preview_content'>
            <h1 className='preview_title'>ЖИТЬ В КИНО,<br/> А НЕ ИГРАТЬ В&nbsp;НЁМ</h1>
            <p className='preview_subtext'>“Мы ценим взаимоуважение и адекватность. В кинопроизводстве важен труд каждого человека. Понимая это, я также прошу своих актеров следовать этим принципам”.</p>
            <p className='preview_author'>Илья Новиков</p>
            <div className='preview_buttons'>
                <button className='preview_btn_watch' type='button'><a href='#actors'>Смотреть актеров</a></button>
                <button className='preview_btn' type='button'><a href={APPEAL} target='_blank'>Обращение Ильи Новикова</a></button>
            </div>
        </div>
    </section>
}

export default SectionPreview;
