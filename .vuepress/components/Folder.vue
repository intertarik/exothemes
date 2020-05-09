<template>
<div>
    <ul class="ulist">
        <li>
             Documentation
        </li>
        <li>
             Files
        </li>
        <li>
             Design
        </li>
    </ul>
</div>
    
</template>

<script>
export default {
    // props : data,
}
</script>

<style scoped>
.ulist{
    list-style: none;
    padding: 0;
    width: 100%;
}
.ulist>li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-right: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    cursor: default;
    color: #22292f;   
}
.ulist>li::before {
    content: "";
    background-image: url(./folder.png);
    margin-right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>
